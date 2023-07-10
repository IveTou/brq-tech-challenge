function kebabToCamel(str: string) {
  console.log(str.match(/-./g));
  return str.replace(/-./g, match => match[1].toUpperCase());
}

export {
  kebabToCamel
}