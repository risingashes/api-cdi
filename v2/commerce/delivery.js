// Authenticated endpoint for exposing item/coins available for
// pickup at the trading post. Requires "account" and "tradingpost"
// scopes.

// NOTE: There may be some small race conditions around purchases
// made before/after you log out which can cause either duplicate 
// entries or omitted entries, but they should clear up within
// five minutes. Cache coherency is a hard problem.


// NOTE: These endpoints are paginated and accept the
// ?page query parameter. Each page evaluates 500,000 individual 
// transactions and concatanates the results based upon item id.
// Only outliers will require more than one page of results.

// GET /v2/commerce/delivery?access_token=<account+tradingpost>&page=0

{
  //First 500,000 results. Concatanated by item id
  "coins": 4294967295,
  "items": [
    {
      "id": 19701,
      "count": 500 //162 stacks found, 500 items total
    },
    {
      "id": 19700,
      "count": 1249592 //499,837 stacks found, 1249592 items total
    },
    {
      "id": 25557,
      "count": 1
    }
  ]
}

// GET /v2/commerce/delivery?access_token=<account+tradingpost>&page=1
{
	//Results 500,001 to 1,000,000. Concatanated by item id.
}

// NOTE: Not including the ?page query parameter for an account with
// over 500,000 transactions will result in an error.

// GET /v2/commerce/delivery?access_token=<account+tradingpost>
{
  
}
