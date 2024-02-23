const iconsMap = new Map([["pin", import("../../assets/icons/pin.svg")]]);

export async function getIconByName(name: string): Promise<string> {
  if (iconsMap.has(name)) {
    return new Promise((resolve, reject) =>
      iconsMap
        .get(name)
        ?.then((value) => resolve(value.default))
        .catch(() => reject(`Error by getting an icon: "${name}"`))
    );
  }

  return Promise.reject(`Icon is not provided: "${name}"`);
}
