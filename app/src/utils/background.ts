import { getBackground } from './localStorage';

export function setupBackground(key: string): void {
  const background = getBackground();
  const [body] = document.getElementsByTagName('body');
  body.style.backgroundColor = background[key] as string;
}
