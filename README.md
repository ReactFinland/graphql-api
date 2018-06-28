# GraphQL API for React Finland 2018

Simple GraphQL API for the conference.

To see the query API:

1.  `NODE_ENV="development" npm start`
2.  `http://localhost:3000/graphql-2018` or `http://localhost:3000/calendar-2018.ics` (calendar)

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
  }
  schedules {
    day
    intervals {
      begin
      end
      sessions {
        description
      }
    }
  }
  tickets {
    name
    link
  }
  page(id: "about") {
    intro
  }
}
```

## Webhooks

### Heroku to Netlify

The API has been connected to the site using a webhook so that it builds whenever the API changes:

- `heroku config:set REBUILD_SITES=<Netlify urls separate by comma go here> -a react-finland-api`

> Remember to run the server in production mode. That will enable site rebuilding hook!
