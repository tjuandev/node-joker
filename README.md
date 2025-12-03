<h1 align="center">Node Joker Boilerplate</h1>

<div align="center">
<img src="https://i.pinimg.com/736x/b9/0c/ac/b90cacaeaa59c2a6d82a4bf6d57b7ff7.jpg" alt="Joker" width="150" align="center" />

<h3>The starting point for your best Node.js API!</h3>

A modern Node.js boilerplate for building APIs with TypeScript, Vitest, Supertest and BiomeJS following best practices for code organization and testing.
</div>



## Features

- 🚀 **Modern Node.js & TypeScript**: Built with Node.js and TypeScript, utilizing the latest features and type safety
- 🧩 **Colocated Code**: Following [Kent C. Dodds' article on colocation](https://kentcdodds.com/blog/colocation), keeping related code together
- 🧹 **Code Quality**: 
  - Biome for linting and formatting
  - Pre-commit hooks with lefthook
  - Commit message validation with commitlint
- 🧪 **Testing**: 
  - Vitest for unit testing
  - Vitest UI for visual test feedback
  - Test files colocated with source files
- ✅ **Validation**: 
  - Zod for runtime type validation and schema validation
  - Validators colocated with features
  - Automatic error handling for validation failures

## Project Structure

```
src/
├── api/                    # API routes and controllers
│   └── item/              # Item-related features
│       ├── item.controller.ts  # Business logic
│       ├── item.model.ts       # Data models
│       ├── item.router.ts      # Route definitions
│       ├── item.validators.ts  # Zod validation schemas
│       └── __tests__/
│           └── item.test.ts  # Tests for item feature
├── config/                # Configuration files
├── testHelpers/          # Test utilities
└── app.ts                # Application entry point
```

## Development Setup and Commands

1. **Install Dependencies**
   ```bash
   yarn install
   ```

2. **Development Server**
   ```bash
   yarn dev
   ```

3. **Testing**
   ```bash
   # Run tests in CLI
   yarn test
   
   # Run tests with UI
   yarn test:ui
   ```

4. **Code Quality**
   ```bash
   # Lint
   yarn lint
   
   # Format
   yarn format
   
   # Type checking
   yarn typecheck
   ```

## Validation with Zod

This project uses [Zod](https://zod.dev/) for runtime type validation and schema validation. Validators are colocated with their respective features, following the project's colocation pattern.

### Creating Validators

Validators are defined in `*.validators.ts` files within each feature directory:

```typescript
import { z } from 'zod'

export const createItemValidator = z.object({
  name: z.string().min(1, { message: 'Name is required' })
})
```

### Using Validators in Controllers

Validators are used in controllers to parse and validate request bodies:

```typescript
import { createItemValidator } from './item.validators.ts'

export const createItem: RequestHandler = async (req, res, next) => {
  try {
    const { name } = createItemValidator.parse(req.body)
    // Use validated data...
  } catch (error) {
    next(error) // Zod errors are automatically handled
  }
}
```

### Error Handling

Zod validation errors are automatically handled by the error handler middleware. When validation fails, the API returns a `400 Bad Request` response with detailed error information:

```json
{
  "message": "Validation failed",
  "errors": [
    {
      "code": "too_small",
      "minimum": 1,
      "type": "string",
      "inclusive": true,
      "exact": false,
      "message": "Name is required",
      "path": ["name"]
    }
  ]
}
```

## Path Aliases

The project uses path aliases for cleaner imports:

```typescript
import { something } from '#src/something'
import { testHelper } from '#testHelpers/testHelper'
import { config } from '#config/config'
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Commit with a conventional commit message
5. Push and create a pull request

## License

MIT 
