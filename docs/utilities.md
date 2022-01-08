# Utilities

@vueuse/gesture uses a set of utility functions internally that are exposed for anybody's convenience.

## addV

Adds two vectors.

```javascript
import { addV } from '@vueuse/gesture'

addV([10, 5], [5, 7]) // Returns [15, 12]
```

## subV

Substracts two vectors.

```javascript
import { subV } from '@vueuse/gesture'

subV([10, 5], [1, 2]) // Returns [9, 3]
```

## rubberbandIfOutOfBounds

Calculates the rubberbanding effect from a given position value, two bounds min, max and an elasticity constant.

```typescript
import { rubberbandIfOutOfBounds } from '@vueuse/gesture'

rubberbandIfOutOfBounds(
  position: number,
  min: number,
  max: number,
  constant = 0.15,
)
```
