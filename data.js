var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6206279651278823,
          "pitch": 0.35233207069737915,
          "rotation": 0,
          "target": "1-master"
        },
        {
          "yaw": -0.029120153999830478,
          "pitch": 0.17216813470031944,
          "rotation": 0,
          "target": "3-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3788714542735896,
          "pitch": 0.15605451372185009,
          "rotation": 0,
          "target": "2-ensuite"
        },
        {
          "yaw": 1.2684068593081772,
          "pitch": 0.23759107204047325,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1183884805478925,
          "pitch": 0.329976437618841,
          "rotation": 0,
          "target": "1-master"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-family",
      "name": "Family",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.820992446780533,
          "pitch": 0.04941468494072154,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 2.72633701806053,
          "pitch": 0.05035257411439176,
          "rotation": 0,
          "target": "5-hall"
        },
        {
          "yaw": -2.2515566900701742,
          "pitch": 0.153944535342303,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9523823214868674,
          "pitch": 0.11214199251580759,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": -2.6669733423462905,
          "pitch": 0.09680544586144357,
          "rotation": 0,
          "target": "6-bathroom"
        },
        {
          "yaw": -2.3006549498180213,
          "pitch": 0.12095641313713656,
          "rotation": 0,
          "target": "5-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5186707259722425,
          "pitch": 0.4546123248589726,
          "rotation": 0,
          "target": "7-bed1"
        },
        {
          "yaw": -1.5951852846544892,
          "pitch": 0.4016922555262177,
          "rotation": 0,
          "target": "8-bed2"
        },
        {
          "yaw": -0.16295878692593746,
          "pitch": 0.17286522947964222,
          "rotation": 0,
          "target": "3-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6417456454180712,
          "pitch": 0.15414796856550517,
          "rotation": 0,
          "target": "3-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bed1",
      "name": "Bed1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.013098822572065,
          "pitch": 0.6918404656531614,
          "rotation": 0,
          "target": "5-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bed2",
      "name": "Bed2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1375,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8232300001456796,
          "pitch": 0.7316895850290326,
          "rotation": 0,
          "target": "5-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Noleen",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
