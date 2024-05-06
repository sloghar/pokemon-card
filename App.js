import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native'
import PokemonCard from './components/PokemonCard'

const data = [
  {
    name: 'Pikachu',
    image: require('./assets/pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground']
  },
  {
    name: 'Charmander',
    image: require('./assets/charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock']
  },
  {
    name: 'Squirtle',
    image: require('./assets/squirtle.png'), // Replace with the actual image path
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass']
  },
  {
    name: 'Bulbasaur',
    image: require('./assets/bulbasaur.png'), // Replace with the actual image path
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']
  }
]

export default function App () {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          data.map(pokemon => (
            <PokemonCard key={pokemon.name} {...pokemon} />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})
