
async function getQueryData(keyword) {
let response = await fetch(`https://classes.colorado.edu/api/?page=fose&route=search&keyword=$CSCI`, {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "_scid=84d98465-aed8-4420-86b7-5e1f9b3b8d8d; _tt_enable_cookie=1; _fbp=fb.1.1723065433434.40279252109109064; _ga_X9C2N8PGE9=GS1.2.1723066256.1.0.1723066256.0.0.0; _clck=dv10hv%7C2%7Cfpr%7C0%7C1680; _ga_N6HVK3DKPE=GS1.2.1729524404.1.0.1729524404.0.0.0; _ga_7358XE778H=GS1.1.1729527317.20.0.1729527317.0.0.0; _ga_LWQ0VH821D=GS1.2.1730154834.1.0.1730154834.0.0.0; _ga_1SD2TRNED6=GS1.1.1730154915.1.1.1730154936.39.0.0; _ga_SGH2S9GFQ8=GS1.1.1730154937.1.0.1730154947.0.0.0; _ga_8LKQR096C1=GS1.1.1730929687.1.1.1730929750.0.0.0; _ga_J6G0JGPN9N=GS1.2.1731640858.8.0.1731640858.0.0.0; _ttp=H60qa8f3LzDnXKoh15RY-2VRFM6.tt.1; _ga_YJ1LW5VFPD=GS1.2.1732136356.11.0.1732136356.0.0.0; _hjSessionUser_3845060=eyJpZCI6ImQ3NTk5MTRhLWE0YjYtNTczMi05NGE2LTFmM2EyOGM2OTJkMyIsImNyZWF0ZWQiOjE3MzIxMzYzNTcwOTUsImV4aXN0aW5nIjp0cnVlfQ==; _ga_G2YDBK3X6G=GS1.1.1734093141.2.1.1734093313.60.0.0; _ga_T2P7B4DJSF=GS1.1.1736795840.2.0.1736795853.47.0.0; _ga_JXVDS02GKB=GS1.1.1737595284.1.1.1737595289.55.0.0; _ga_KTFY1RHY5Y=GS1.1.1737652074.2.0.1737652074.60.0.0; _hp2_props.3001039959=%7B%22Base.appName%22%3A%22Canvas%22%7D; _hp2_id.3001039959=%7B%22userId%22%3A%228333904931240603%22%2C%22pageviewId%22%3A%22466354736705919%22%2C%22sessionId%22%3A%223503844762259441%22%2C%22identity%22%3A%22uu-2-4c997ccf2b4406717bd3f8c8c2bbc275b59ebc09fbe69eab28185fb60db9556d-Hfn8vHEbxoAdCJGwjGUjwMI8MKIm0o7FtKAQqNh3%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D; _ga_HBJ1X4XVSS=GS1.1.1738980672.6.0.1738980672.0.0.0; _ga_PT4VWDPXNE=GS1.1.1738980672.6.0.1738980672.0.0.0; _gcl_au=1.1.1747316786.1741084623; _rdt_uuid=1732136356892.c4ff2f74-c978-457a-8487-f8af5b1b96e8; _ga_ZHNTZ7RJC6=GS1.1.1741144613.1.0.1741144618.55.0.0; _ga_Y4QFSY3HD9=GS1.1.1741889428.47.1.1741890576.0.0.0; _ga_6KZWTC39TH=GS1.1.1741889459.3.1.1741890577.0.0.0; _ScCbts=%5B%5D; _sctr=1%7C1743746400000; _scid_r=r_iE2YRlrtgvIPi3Xh-bO42NQFPrsiAJGQeolA; _ga_YTXE0G132N=GS1.1.1743812675.2.0.1743812680.55.0.0; _ga_WW2LE17NC1=GS1.1.1743812675.34.0.1743812680.55.0.0; _ga=GA1.2.1616724206.1722631965; _gid=GA1.2.1911936952.1744251395; ab.storage.deviceId.f9c2b69f-2136-44e0-a55a-dff72d99aa19=g%3ADN82ApYdFJaDazdwIkTAV6UFzBU2%7Ce%3Aundefined%7Cc%3A1744265227458%7Cl%3A1744265227458; ab.storage.sessionId.f9c2b69f-2136-44e0-a55a-dff72d99aa19=g%3A519378ef-2279-f60e-6b35-88315f73602c%7Ce%3A1744267027475%7Cc%3A1744265227475%7Cl%3A1744265227475; _ga_HQE5JXBW8M=GS1.2.1744306854.378.1.1744306903.0.0.0",
      "Referer": "https://classes.colorado.edu/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "%7B%22other%22%3A%7B%22srcdb%22%3A%222257%22%7D%2C%22criteria%22%3A%5B%7B%22field%22%3A%22keyword%22%2C%22value%22%3A%22CSCI%22%7D%5D%7D",
    "method": "POST"
  })
  response = await response.json()
  console.log(response)

  response.forEach(element => {
    console.log(element.code)
    
  });


}

async function getClassData(fucking_class_name) {



}

//get data for a given keyword
getQueryData('CSCI')

//get data for each individual class
getClassData()