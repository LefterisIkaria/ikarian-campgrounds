export function handleAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
}
