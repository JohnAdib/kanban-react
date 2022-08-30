class Storage extends Map {
  set(id, value) {
    if (typeof value === "object") value = JSON.stringify(value);
    localStorage.setItem(id, value);
  }

  get(id) {
    const value = localStorage.getItem(id);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}

export default Storage;
