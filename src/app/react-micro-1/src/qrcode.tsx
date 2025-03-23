import { useEffect, useState } from "react";
import QRCode from 'qrcode';

interface Props {
  info: {
    number: number;
  };
}

export function QrcodeImg (props: Props): JSX.Element {
  const {info} = props;
  const [codeUrl, setCodeUrl] = useState('');

  useEffect(() => {
    QRCode.toDataURL('http://192.168.31.238:300/page?name=jibao', {
      type:'image/webp',
      color: {
        dark: '#006eff',
      },
    })
    // QRCode.toDataURL(JSON.stringify({title: 'Jibao, you **'}))
    .then((url) => {
      setCodeUrl(url);
      console.log(url, 'url')
    })
    .catch(err => {
      console.error(err, err);
    })
  }, [info]);

  return <>
  < img src={codeUrl} alt='' />
  </>
}