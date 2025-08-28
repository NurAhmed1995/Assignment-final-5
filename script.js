// --- state ---
let coins = 100,
  hearts = 0,
  copies = 0;

// --- dom refs ---
const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const gridEl = document.getElementById("cardGrid");
const historyList = document.getElementById("historyList");
const clearBtn = document.getElementById("clearHistory");

const nowStr = () => new Date().toLocaleString();

function updateUI() {
  heartCountEl.textContent = hearts;
  coinCountEl.textContent = coins;
  copyCountEl.textContent = copies;
}

function addHistoryEntry(name, number) {
  const div = document.createElement("div");
  div.className = "rounded border p-2 bg-slate-50";
  div.textContent = `${name} (${number}) — ${nowStr()}`;
  historyList.prepend(div);
}

// Event delegation for all cards
gridEl.addEventListener("click", async (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const name = card.dataset.service;
  const number = card.dataset.number;

  if (e.target.classList.contains("btn-heart")) {
    hearts++;
    updateUI();
    return;
  }
  if (e.target.classList.contains("copy-btn")) {
    try {
      await navigator.clipboard.writeText(number);
      copies++;
      updateUI();
      alert(`${name} (${number}) copied!`);
    } catch (err) {
      alert("Copy failed");
    }
    return;
  }
  if (e.target.classList.contains("call-btn")) {
    if (coins < 20) {
      alert("Not enough coins");
      return;
    }
    alert(`Calling ${name} (${number})`);
    coins -= 20;
    updateUI();
    addHistoryEntry(name, number);
    return;
  }
});

clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});

updateUI();
