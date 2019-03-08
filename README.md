[![Codeship Status for ReactFinland/graphql-api](https://app.codeship.com/projects/f27d4b30-0088-0137-84e3-2ae3d6f1076b/status?branch=master)](https://app.codeship.com/projects/324651)

# GraphQL API for React Finland 2018

Simple GraphQL API for the conference.

To see the query API:

1.  `NODE_ENV="development" npm start`
2.  `http://localhost:3000/graphql-2018` or `http://localhost:3000/calendar-2018.ics` (calendar)

## Image Processing

The images are pushed to [Cloudinary](https://cloudinary.com/) and it's used as our image CDN. Remember to set `.env` for local development if you want to use images:

**.env**

```
CLOUDINARY_CLOUD_NAME=react-finland
CLOUDINARY_API_KEY=<get from Cloudinary account>
CLOUDINARY_API_SECRET=<get from Cloudinary account>
```

Also remember to set the same on the host of the API.

> You can access images through `http://localhost:3000/graphql-2018/images`. Example: `http://localhost:3000/graphql-2018/images/ken.jpg`.

## Webhooks

### Heroku to Netlify

The API has been connected to the site using a webhook so that it builds whenever the API changes:

- `heroku config:set REBUILD_SITES=<Netlify urls separate by comma go here> -a react-finland-api`

> Remember to run the server in production mode. That will enable site rebuilding hook!
