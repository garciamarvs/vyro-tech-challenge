/**
 * Mocked vehicles
 *
 * @todo load these from the Vyro GraphQL API
 *
 * API Details:
 *
 * Endpoint: https://hasura.vyro.com.au/v1/graphql
 * Query:
 *
 * query GetStockedVehicle {
 *      stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
 *          name
 *          condition
 *          media
 *          is_sold
 *      }
 * }
 *
 * Note: This is a public API. No credentials needed.
 *
 * You can interact with the GraphQL API using whatever framework or approach you wish. Fetch, Apollo, whatever.
 **/

export const getStockedVehicles = async () => {
  const endpoint = "https://hasura.vyro.com.au/v1/graphql";

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
         stocked_vehicles(where: { is_listed: { _eq: true } }, limit: 6) {
           name
           condition
           media
           is_sold
         }
      }`,
    }),
  });
  
  const {
    data: { stocked_vehicles },
  } = await response.json();

  return stocked_vehicles;
};

export const mockedVehicles = new Array(6).fill({
  name: "Polestar 2",
  condition: "new",
  media: [
    {
      src: "https://vyro-prod-assets-cf.imgix.net/public/polestar/2/standard-range-single-motor/thunder/_/charcoal-embossed-textile-with-3d-etched-deco/19-5-double-spoke-black-diamond-cut-alloy-wheel/exterior/angle-0.jpg?w=764&h=534&auto=format&fit=crop",
      alt: "Polestar 2",
      placement: "featured",
    },
  ],
  is_sold: false,
});
