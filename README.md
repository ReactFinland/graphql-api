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

## Webhooks

### npm to Heroku

To connect npm to the hook, consider the following commands:

* `heroku config -a react-finland-api` - Show environment variables.
* `heroku config:set SECRET=<secret goes here>`
* `wombat hook ls @react-finland/content-2018` - Show set hooks.
* `wombat hook add @react-finland/content-2018 https://api.react-finland.fi/webhooks/restart-server <secret>`

See [wombat documentation for more](https://www.npmjs.com/package/wombat). The [npm documentation](https://github.com/npm/registry/blob/master/docs/hooks/creating-and-managing-hooks.md) covers npm secret handling in some detail.

### Heroku to Netlify

The API has been connected to the site using a webhook so that it builds whenever the API changes:

```
heroku webhooks:add -i api:app -l notify -u https://api.netlify.com/build_hooks/<get this from netlify> --appName react-finland-api
```

See also [Heroku documentation on webhooks](https://devcenter.heroku.com/articles/app-webhooks).
