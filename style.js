import { StyleSheet } from 'react-native'

export const COLORS = {
  primary: '#3A4459',
  darkPrimary: '#0f4e06',
  border: '#a9a9a9',
  background: '#E8F0FB',
  white: '#ffffff',
  gold: '#FFBF46',
  naturalGreen: '#75B09C',
  pink: '#F4989C',
  turquoise: '#4BBAB9',
}
export const typo = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Prompt_700Bold',
    color: COLORS.primary,
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Prompt_700Bold',
    color: COLORS.primary,
  },
  body: {
    fontSize: 16,
    fontFamily: 'Prompt_400Regular',
    color: COLORS.primary,
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
  },
  bottomBarStyle: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: COLORS.primary,
    overflow: 'hidden',
    flex: 1,
    justifyContent: 'center',
    fontFamily: 'Prompt_400Regular',
  },
  shadowBox: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: 14,
    margin: 12,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  infoBox: {
    borderRadius: 12,
    margin: 12,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: COLORS.white,
    padding: 10,
    marginBottom: 0,
    marginHorizontal: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
})

export default styles
