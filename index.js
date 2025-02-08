window.onload = () => {
  const message = document.querySelector("#message");
  const countdown = document.querySelector("#countdown");
  const deadline = dayjs("2025-02-16 16:30:00");

  const timer = () => {
    let diff = deadline.diff();
    if (diff > 0) {
      const day = Math.floor(diff / 86400000);
      diff -= 86400000 * day;
      const hour = Math.floor(diff / 3600000);
      diff -= 3600000 * hour;
      const min = Math.floor(diff / 60000);
      diff -= 60000 * min;
      const sec = Math.floor(diff / 1000);
      diff -= 1000 * sec;
      countdown.innerText = `${zeroPad(day)}日 ${zeroPad(hour)}時間 ${zeroPad(min)}分 ${zeroPad(sec)}秒`;
    } else {
      message.innerText = "作品提出期間は終了しました！";
      countdown.innerText = "お疲れさまでした！";
    }
    setTimeout(timer, 100);
  };
  timer();
};

function zeroPad(n) {
  return ("00" + n).slice(-2);
}
