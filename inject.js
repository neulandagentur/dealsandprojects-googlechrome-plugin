(() => {
  if (window.location.href.indexOf('my.dealsandprojects.com') < 0) {
    return;
  }

  /**
   * catch every links on the page and return them in an array
   * @return {Array}
   */
  const getLinks = () => [].slice.call(document.querySelectorAll('a'));

  /**
   * returns a list of links without target blank
   * @return {Array}
   */
  const getTargetNullLinks = () => getLinks().filter(link => link.getAttribute('target') !== '_blank');

  /**
   * adds a target blank to an array of items
   * @param {Array}
   */
  const setTargetBlank = (links) => {
    links.forEach(link => {
      link.setAttribute('target', '_blank');
    });
  };

  setInterval(() => {
    setTargetBlank(getTargetNullLinks());
  }, 1000);
})()
