
import { shallowMount } from '@vue/test-utils'
import pokemonApi from '@/api/pokemonApi.js'


describe('pokemonApi', () => {
    test('axiso debe de estar configurado con el api de pokemon',()=>{
console.log(pokemonApi)
    })
    
  })
  
  /*it('renders props.msg when passed', () => {
      const msg = 'new message'
      const wrapper = shallowMount(pokemonApi, {
        props: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
    })*/