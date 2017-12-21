# GraphQL API for React Finland 2018

Simple GraphQL API for the conference.

To see the query API:

1. `NODE_ENV="development" npm start`
2. `http://localhost:3000/graphql-2018`

**Example query:**

```graphql
{
  speakers {
    name
    keywords
  },
  schedules {
    day,
    intervals {
      begin
      end
      sessions {
        description
      }
    }
  },
  tickets {
    name
    link
  }
}
```
