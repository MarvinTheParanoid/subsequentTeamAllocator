// Combine all JSON files into a single variable for each Local
// Note: ideally translation files would be fetched from the backend if we add more than english
const aggregateLocales = (context) => {
  const filePaths = context.keys();
  const fileContents = filePaths.map(context);

  return filePaths.reduce((store, key, index) => {
    const namespace = key.replace(/^.*[\\/]/, "").slice(0, -5);
    const value = fileContents[index];
    return { ...store, [namespace]: value };
  }, {});
};

// aggregate all locales
// Note: think of a better way to do this than require.context
const EN = aggregateLocales(require.context("./en/", false, /\.json$/));

// export all locales
export { EN };
