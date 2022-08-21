// Custom middleware that logs out the type and path of each request to the server
const clog = (req, res, next) => {  // 3rd param 'next' used for next()
  const fgCyan = '\x1b[36m';
  switch (req.method) {
    case 'GET': {
      console.info(`📗 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`📘 ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`📙${fgCyan}${req.method} request to ${req.path}`);
  }

  next(); // all middleware should have next()
};

exports.clog = clog;
