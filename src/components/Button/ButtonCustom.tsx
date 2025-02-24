import { Button } from '@chakra-ui/react'

interface IButton{
    event : (name: string)=> void
}

export default function ButtonCustom({event} : IButton) {
  return (
    <Button onClick={()=>event('Willian')} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        Entrar
    </Button>
  )
}
