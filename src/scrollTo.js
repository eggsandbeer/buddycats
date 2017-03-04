const scrollTo = (el, to, duration, cb) => {
  if (duration <= 0) {
    return;
  }
  const difference = to - el.scrollLeft;
  const perTick = difference / duration * 10;

  setTimeout(() => {
    el.scrollLeft = el.scrollLeft + perTick;
    if (el.scrollLeft === to) {
      if (cb) {
        cb();
      }
      return;
    }
    scrollTo(el, to, duration - 10, cb);
  }, 10);
}

export default scrollTo;
