import cssClasses from "../../config/css-classes";

export default function safeList(): string[] {
  return fetchList(cssClasses);
}

function fetchList(list: object | string): string[] {
  if (typeof list === 'string') {
    return list.split(' ');
  }

  let safeList: string[] = [];

  for (const value of Object.values(list)) {
    safeList = safeList.concat(fetchList(value));
  }

  return safeList;
}
