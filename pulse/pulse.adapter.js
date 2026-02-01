import { subscribe } from '../../hcm-pulse-adjacency-bus/bus/index.js';

let localVolatility = 0;

subscribe(pulse => {
  // الكيان القيمي لا يرد فورًا
  // يراكم حساسية فقط
  localVolatility += pulse.intensity * 0.01;

  if (localVolatility > 1) {
    localVolatility = 1;
  }
});

// تُستخدم localVolatility لاحقًا داخليًا
// بدون بث أو مشاركة
export function readEconomicTension() {
  return localVolatility;
}
