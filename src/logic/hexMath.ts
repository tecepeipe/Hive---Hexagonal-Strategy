import { AxialHex, hexKey } from '../types/hive';

export const HEX_DIRECTIONS: AxialHex[] = [
  { q: 1, r: 0 },   // East/South-East
  { q: 1, r: -1 },  // North-East
  { q: 0, r: -1 },  // North-West
  { q: -1, r: 0 },  // West/North-West
  { q: -1, r: 1 },  // South-West
  { q: 0, r: 1 },   // South-East
];

export function getNeighborHex(hex: AxialHex, dirIndex: number): AxialHex {
  const dir = HEX_DIRECTIONS[(dirIndex % 6 + 6) % 6];
  return { q: hex.q + dir.q, r: hex.r + dir.r };
}

export function getAllNeighbors(hex: AxialHex): AxialHex[] {
  return HEX_DIRECTIONS.map(dir => ({ q: hex.q + dir.q, r: hex.r + dir.r }));
}

export function isSameHex(a: AxialHex, b: AxialHex): boolean {
  return a.q === b.q && a.r === b.r;
}

export function hexDistance(a: AxialHex, b: AxialHex): number {
  return (
    (Math.abs(a.q - b.q) +
      Math.abs(a.r - b.r) +
      Math.abs(a.q + a.r - (b.q + b.r))) /
    2
  );
}

export function getCommonNeighbors(a: AxialHex, b: AxialHex): AxialHex[] {
  const nA = getAllNeighbors(a);
  const nB = getAllNeighbors(b);
  return nA.filter(hexA => nB.some(hexB => isSameHex(hexA, hexB)));
}

// Convert axial hex coordinates (q, r) to pixel coordinates (x, y) for pointy-topped or flat-topped hexes.
// We use flat-topped hexes or pointy-topped hexes. Let's use pointy-topped hexes:
// x = size * sqrt(3) * (q + r/2)
// y = size * (3/2) * r
export function hexToPixel(q: number, r: number, size: number = 42): { x: number; y: number } {
  const x = size * Math.sqrt(3) * (q + r / 2);
  const y = size * (3 / 2) * r;
  return { x, y };
}

export function pixelToHex(x: number, y: number, size: number = 42): AxialHex {
  const q = ((Math.sqrt(3) / 3) * x - (1 / 3) * y) / size;
  const r = ((2 / 3) * y) / size;
  return hexRound({ q, r });
}

function hexRound(hex: { q: number; r: number }): AxialHex {
  const s = -hex.q - hex.r;
  let q = Math.round(hex.q);
  let r = Math.round(hex.r);
  let sRound = Math.round(s);

  const qDiff = Math.abs(q - hex.q);
  const rDiff = Math.abs(r - hex.r);
  const sDiff = Math.abs(sRound - s);

  if (qDiff > rDiff && qDiff > sDiff) {
    q = -r - sRound;
  } else if (rDiff > sDiff) {
    r = -q - sRound;
  }

  return { q, r };
}

// Generate the 6 corner points for drawing a regular pointy-topped hexagon SVG polygon
export function getHexCornerPoints(cx: number, cy: number, size: number = 42): string {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angleDeg = 60 * i - 30; // Pointy topped
    const angleRad = (Math.PI / 180) * angleDeg;
    const x = cx + size * Math.cos(angleRad);
    const y = cy + size * Math.sin(angleRad);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(' ');
}
