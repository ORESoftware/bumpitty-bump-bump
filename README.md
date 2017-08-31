
# Bumpitty-Bump-Bump (aka b3)

Bump a value in your package.json so that Docker (and others) notice changes.

# API

## cli

```bash
npm install -g bumpitty-bump-bump
cd your-project && b3
```

## programmatic

```bash
npm install -S bumpitty-bump-bump
```

```typescript
import {bumpSync, bump, bumpp} from 'bumpitty-bump-bump';

// bumpSync is synchronous
// bump is async callback style
// bumpp is async promise style
```


