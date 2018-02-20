# GraphQL API for React Finland 2018

Simple GraphQL API for the conference.

To see the query API:

1. `NODE_ENV="development" npm start`
2. `http://localhost:3000/graphql-2018` or `http://localhost:3000/calendar-2018.ics` (calendar)

You can access images through `http://localhost:3000/graphql-2018/images`. Example: `http://localhost:3000/graphql-2018/images/ken.jpg`.

**Example query:**

```graphql
{
  pages {
    id
    title
    description
  }
  partners {
    name
  }
  organizers {
    name
    location {
      country {
        name
        code
      }
    }
  }
  speakers {
    name
    keywords
    presentations {
      day
      title
      description
    }
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
  page(id: "about") {
    intro
  }
}
```

## Notes

The API has been connected to the site using a webhook so that it builds whenever the API changes:

```
heroku webhooks:add -i api:build -l notify -u https://api.netlify.com/build_hooks/<get this from netlify> --appName react-finland-api
```

See also [Heroku documentation on webhooks](https://devcenter.heroku.com/articles/app-webhooks).
