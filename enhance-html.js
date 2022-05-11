/*
 *  i<type><name>
 *  <type> m=map l=location p=picture w=website link
 *  <name> a=maetAnnes Burrito
 *         b=bright angle trail head
 *         g=grand canyon
 *         h=hotel monte vista
 *         i=indian garden
 *         k=kaibab trail head
 *         l=lava cave,
 *         o=pato thai
 *         m=mcmillan Bar and Kitchen
 *         p=picture canyon
 *         r=railway pass casino
 *         s=shuttle bus
 *         t=the tipoff
 *         u=plateau point
 *         v=gc visitors
 *         y=gc village
 */

const icons = {
  il: "<icon-location></icon-location>",
  im: "<icon-map></icon-map>",
  ip: "<icon-picture></icon-picture>",
  iw: "<icon-link></icon-link>",
};

const links = {
  ill: "https://goo.gl/maps/kMvpxGEtZCYrX4356",
  iml: "./lavaRiverCave.png",
  ipl: "./lavaRiverCavePic.png",
  iwl: "https://www.flagstaff.com/lava-tubes",
  ilp: "https://goo.gl/maps/uPY8NP7W2pYQpf4W8",
  imp: "./picture-canyon-map.png",
  ipp: "./picture-canyon.png",
  iwp: "https://www.flagstaff.az.gov/2881/Picture-Canyon-Natural-Cultural-Preserve",
  ilh: "https://g.page/HOTELMONTEVISTAFLAGSTAFF?share",
  iph: "./hotelMonteVista.png",
  ilv: "https://goo.gl/maps/SLtrUex9xSApQBm87",
  ilk: "https://goo.gl/maps/JjYLXYE6MRoMi9LR9",
  ilt: "https://goo.gl/maps/J7BjnjdNfgw9NbPSA",
  ili: "https://goo.gl/maps/ZYKhvRMN7ughqHQN7",
  ilu: "https://goo.gl/maps/vFxE351SrydbjSwF9",
  ilb: "https://goo.gl/maps/fqZsb6FNSWRk5sC28",
  ipy: "./gcvillage.png",
  ily: "https://goo.gl/maps/UEeH3AY3RJiSPNSr9",
  ips: "./busRoute.png",
  ilr: "https://goo.gl/maps/BDgX9e9Zc38S49Na6",
  iwm: "https://themcmillan.us/",
  iwo: "https://www.patothai.com/",
  iwa: "https://martannes.com/",
};

//

const tag = (link) => `<${link} />`;

export const enhance = (c) => {
  const foundLinks = Object.keys(links).filter((l) => c.includes(tag(l)));
  if (foundLinks.length === 0) return c;
  return foundLinks.reduce((d, l) => {
    const match = l.match(/(i[mlpw])([a-z])/);
    if (!match[1]) return;
    const url = links[match[0]].replace(/^\.\//, window.location);
    const linkedT = `<a href="${url}" class="icon">${icons[match[1]]}</a>`;
    return d !== "" ? d.replace(tag(l), linkedT) : c.replace(tag(l), linkedT);
  }, "");
};
