import React from 'react'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const Waap = () => {
  return <WhatsAppWidget 
            phoneNumber='543854263515'
            message='Hola! 👋🏼 Qué puedo hacer por ti?'
            companyName='Nicolás Romero'
            sendButton='Enviar'
            textReplyTime='Normalmente respondo en un día'
        />
}

export default Waap