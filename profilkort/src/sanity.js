// src/sanityClient.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '9jdqd2bw', 
  dataset: 'production',        // eller det datasettet du bruker
  apiVersion: '2024-01-01',     // bruk gjerne en spesifikk API-versjon
  useCdn: true,                 // true for raskere lastetid, false hvis du trenger ferske data
})

