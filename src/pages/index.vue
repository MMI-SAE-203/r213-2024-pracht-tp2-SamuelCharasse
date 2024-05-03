<script setup lang="ts">
const maisonsListe: {
    adresse: string;
    collectionId: string;
    collectionName: string;
    created: string;
    favori: boolean;
    id: string;
    images: string[];
    nbSdB: number;
    nbrChambres: number;
    nomMaison: string;
    prix: number;
    surface: number;
    updated: string;
}[] = [
  {
    "adresse": "7A Rue Jean Moulin 87350 Panazol",
    "collectionId": "abmiqss6t9fk0y5",
    "collectionName": "Maison",
    "created": "2024-04-12 08:36:23.090Z",
    "favori": false,
    "id": "rkfdoca57u41o44",
    "images": [],
    "nbSdB": 2,
    "nbrChambres": 3,
    "nomMaison": "Anis",
    "prix": 300000,
    "surface": 156.4,
    "updated": "2024-04-12 08:36:23.090Z"
  },
  {
    "adresse": "12 Avenue Lagrange 03200 Vichy",
    "collectionId": "abmiqss6t9fk0y5",
    "collectionName": "Maison",
    "created": "2024-04-12 08:40:05.782Z",
    "favori": true,
    "id": "pg8qbvgltwp8gpo",
    "images": [
      "luis_georg_muller_t1_ic_ka8_hk_um_unsplash_bBkyqyQvKl.jpg"
    ],
    "nbSdB": 2,
    "nbrChambres": 4,
    "nomMaison": "Lola",
    "prix": 450000,
    "surface": 203,
    "updated": "2024-04-12 08:40:05.782Z"
  },
  {
    "adresse": "1 chemin de la forêt 23000 Guéret",
    "collectionId": "abmiqss6t9fk0y5",
    "collectionName": "Maison",
    "created": "2024-04-12 08:47:09.215Z",
    "favori": true,
    "id": "uim8v2k2c3ulp04",
    "images": [
      "naomi_hebert_mp0bga_s_d1c_unsplash_v2gjA8Wy01.jpg",
      "spacejoy_ih7w_psjwomc_unsplash_BV3jYUzrEK.jpg",
      "rowan_heuvel_bjej8_by1_jyq_unsplash_Vdi42sY768.jpg",
      "inside_weather_uxqlfigh6o_e_unsplash_Gu5bd07Ejv.jpg"
    ],
    "nbSdB": 0,
    "nbrChambres": 1,
    "nomMaison": "Rayane",
    "prix": 4000,
    "surface": 17,
    "updated": "2024-04-12 08:47:09.215Z"
  },
  {
    "adresse": "15 Boulevard GrosJean 25200 Montbéliard",
    "collectionId": "abmiqss6t9fk0y5",
    "collectionName": "Maison",
    "created": "2024-04-12 08:51:32.851Z",
    "favori": false,
    "id": "0z3ph3zzh8ibhs7",
    "images": [
      "kenny_eliason_m_gzx2_mopr_s_unsplash_meoQlsTuul.jpg",
      "kam_idris_hq_hx3_lbn18_unsplash_Gx7AhW5vjJ.jpg",
      "minh_pham_ot_xadk_uh3_i_unsplash_VrE9WvLEj0.jpg"
    ],
    "nbSdB": 1,
    "nbrChambres": 2,
    "nomMaison": "David",
    "prix": 15457,
    "surface": 47,
    "updated": "2024-04-12 08:51:32.851Z"
  },
  {
    "adresse": "6 Impasse des lilas 64500 Saint-Jean-de-Luz",
    "collectionId": "abmiqss6t9fk0y5",
    "collectionName": "Maison",
    "created": "2024-04-12 08:54:16.671Z",
    "favori": false,
    "id": "cloxe8s7l1nqeiz",
    "images": [
      "minh_pham_7p_cfuyb_p_p8_unsplash_CeXgjofHkH.jpg",
      "scott_webb_1ddol8rg_uh8_unsplash_U0fmoojlxw.jpg"
    ],
    "nbSdB": 3,
    "nbrChambres": 2,
    "nomMaison": "Azerty",
    "prix": 123654,
    "surface": 87.9,
    "updated": "2024-04-12 08:54:16.671Z"
  }
]
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>

</template>
