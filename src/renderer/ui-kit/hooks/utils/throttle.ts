function throttle(callback: (args: any) => any, limit: number) {
  let waiting = false;
  return function a() {
    if (!waiting) {
      callback.apply(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        arguments
      );
      waiting = true;
      setTimeout(function b() {
        waiting = false;
      }, limit);
    }
  };
}
export { throttle };
