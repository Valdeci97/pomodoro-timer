function removeClass(elements: NodeListOf<Element>, className: string): void {
  elements.forEach((element) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  });
}

function addClass(selector: string, className: string): void {
  document.querySelector(selector).classList.add(className);
}

function getAllElements(selector: string): NodeListOf<Element> {
  return document.querySelectorAll(selector);
}

export function handleClasses(
  selector: string,
  classHandle: string,
  targetId: string,
): void {
  const elements = getAllElements(selector);
  removeClass(elements, classHandle);
  addClass(targetId, classHandle);
}
