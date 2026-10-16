import Image from "next/image";

export type FramePhoto = { src: string; alt: string };

/** Full logo from the brand guidelines. `light` is the version for dark backgrounds. */
export function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/brand/logo-light.svg" : "/brand/logo.svg"}
      alt="Immigration Expert Reports"
      width={1154}
      height={218}
      className={className}
    />
  );
}

const ORANGE_PATHS = [
  "M273.902 0C243.735 12.4305 224.063 41.8065 224.063 74.4073V128.996C224.063 128.996 156.633 123.133 118.52 55.7029C118.52 55.7029 99.7867 17.5904 38.7773 0H273.902Z"
];

const BLUE_PATHS = [
  "M95.0801 43.9766L97.3962 48.726C102.468 59.1043 105.077 70.4794 105.077 82.0304V196.427C105.077 196.427 118.505 175.904 171.276 155.382C171.276 155.382 206.457 140.724 221.115 134.86C221.115 134.86 183.003 137.792 141.958 102.611C129.557 91.9983 119.531 78.483 110.941 64.7039C106.367 57.3746 101.178 50.1039 95.0508 43.9766H95.0801Z",
  "M45.2344 328.353C45.2344 328.353 106.801 304.9 103.869 237.47C103.869 237.47 106.801 205.221 139.05 184.699C139.05 184.699 297.363 111.405 314.954 79.1562C314.954 79.1562 285.636 117.269 235.797 155.381C235.797 155.381 150.777 237.47 130.255 266.787C130.255 266.787 95.0738 307.831 45.2344 328.353Z"
];

const BASE_PATHS = [
  "M224.072 194.078C224.072 194.078 221.141 263.853 229.936 281.444C229.936 281.444 235.799 328.351 291.502 345.942H0C0 345.942 89.2126 337.44 158.108 258.136C158.108 258.136 206.482 203.46 224.072 194.078Z"
];

/** The monogram: an orange cap, two blue sweeps and a broad base forming a capital I. */
export function Mark({
  className = "",
  orange = "#D17500",
  blue = "#0458DE",
  base = "#192431",
}: {
  className?: string;
  orange?: string;
  blue?: string;
  base?: string;
}) {
  return (
    <svg viewBox="0 0 315 346" className={className} aria-hidden focusable="false">
      {ORANGE_PATHS.map((d) => (
        <path key={d.slice(0, 24)} d={d} fill={orange} />
      ))}
      {BLUE_PATHS.map((d) => (
        <path key={d.slice(0, 24)} d={d} fill={blue} />
      ))}
      {BASE_PATHS.map((d) => (
        <path key={d.slice(0, 24)} d={d} fill={base} />
      ))}
    </svg>
  );
}

/** The long blue sweep of the monogram on its own, used as a marker and divider. */
export function Sweep({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="40 75 280 260" className={className} aria-hidden focusable="false">
      <path d={BLUE_PATHS[1]} fill="currentColor" />
    </svg>
  );
}

/**
 * Clip paths shared by every framed photograph. The lower left corner is cut by a concave curve,
 * the same sweep that shapes the base of the monogram.
 */
export function SwooshDefs() {
  return (
    <svg width="0" height="0" aria-hidden focusable="false" className="pointer-events-none absolute">
      <defs>
        <clipPath id="ier-swoosh" clipPathUnits="objectBoundingBox">
          <path d="M0 0 H1 V1 H0.4 C0.32 0.8 0.16 0.68 0 0.64 Z" />
        </clipPath>
        <clipPath id="ier-swoosh-sm" clipPathUnits="objectBoundingBox">
          <path d="M0 0 H1 V1 H0.26 C0.21 0.88 0.11 0.8 0 0.78 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/**
 * A photograph framed by the monogram: the sweep cut from its lower left corner, a blue sweep
 * set into the cut, and an orange cap along the top edge.
 */
export function SwooshPhoto({
  photo,
  aspect = "aspect-[4/5]",
  sizes = "(max-width: 1024px) 90vw, 520px",
  priority = false,
  accents = true,
  className = "",
}: {
  photo: FramePhoto;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  accents?: boolean;
  className?: string;
}) {
  return (
    <figure className={`relative ${accents ? "pt-3" : ""} ${className}`}>
      {accents && <span aria-hidden className="absolute left-[18%] right-0 top-0 h-3 rounded-tl-full bg-orange" />}
      <div className={`swoosh relative overflow-hidden bg-section-alt ${aspect}`}>
        <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      {accents && <Sweep className="absolute -bottom-2 -left-3 w-[42%] text-blue drop-shadow-[0_8px_16px_rgba(25,36,49,0.25)]" />}
    </figure>
  );
}
