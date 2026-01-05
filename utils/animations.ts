// Consistent animation timing system
export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  entrance: 1.0,
} as const;

export const ANIMATION_EASE = {
  default: 'easeOut',
  smooth: 'easeInOut',
  bounce: 'anticipate',
} as const;

// Common animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: ANIMATION_DURATION.entrance, ease: ANIMATION_EASE.smooth },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: ANIMATION_DURATION.entrance, ease: ANIMATION_EASE.default },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: ANIMATION_DURATION.slow, ease: ANIMATION_EASE.smooth },
};

export const slideInRight = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: ANIMATION_DURATION.slow, ease: ANIMATION_EASE.smooth },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: ANIMATION_DURATION.normal, ease: ANIMATION_EASE.smooth },
};
