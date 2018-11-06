/// Breakpoint suffixes for Tachyons classes.
type BPSuffix = '' | '-ns' | '-m' | '-l';

/// Convert to Tachyons class.
type ToTachy = (value: any) => string;
/// Convert to Tachyons class with breakpoint-suffix.
type ToTachyBP = (value: any, suffix?: BPSuffix) => string;

