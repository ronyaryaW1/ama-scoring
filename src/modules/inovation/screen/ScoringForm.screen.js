import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { justifyContent, position } from 'styled-system';
import ScoringCard from '../../../components/ScoringCard';
import Slider from 'react-native-custom-slider';
import styles from '../style/ScoringForm.style';


const ScoringForm = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    setTotalScore(((value1 + value2 + value3 + value4) / 4).toFixed(1))
  }, [value1, value2, value3, value4]);
  return (
    <View>
      <ScrollView style={styles.container}>
        {/* Scoring Card 1 */}
        <View style={styles.componentContainer}>
          <View style={styles.number}>
            <Text style={styles.h1}>1. </Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.h1}>Jika Anda menjadi costumer, seberapa pentingkah masalah ini?</Text>
            </View>
            <View style={styles.sliderContainer}>
              <View style={styles.titleSliderContainer}>
                <Text style={styles.h3}>Tidak Penting</Text>
                <Text style={styles.h3}>Penting</Text>
              </View>
              <View style={styles.slider}>
                {/* Slider */}
                <Slider
                  value={value1}
                  step={1}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={(value) => setValue1(value)}
                  minimumTrackTintColor={'#C5CFD1'}
                  maximumTrackTintColor={'#EBEBEB'}
                  thumbStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 20,
                  }}
                  customThumb={
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        overflow: 'hidden',
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: '#085D7A',

                      }}
                    />
                  }
                  trackStyle={{
                    height: 12, borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                />

              </View>
            </View>
            <View style={styles.pointContainer}>
              <View style={styles.inputPoint}>
                <Text>{value1}</Text>
                {/* <TextInput

                            value={value}
                            onChangeText={val => setValue(0)}
                        // need handle ASYNCSTORAGE
                        /> */}
              </View>
              <TouchableOpacity onPress={() => setValue1(0)}>
                <Text style={styles.h2}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Scoring Card 2 */}
        <View style={styles.componentContainer}>
          <View style={styles.number}>
            <Text style={styles.h1}>2. </Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.h1}>Seberapa tepat solusi yang ditawarkan untuk mengatasi permasalahan yang ada?</Text>
            </View>
            <View style={styles.sliderContainer}>
              <View style={styles.titleSliderContainer}>
                <Text style={styles.h3}>Tidak Penting</Text>
                <Text style={styles.h3}>Penting</Text>
              </View>
              <View style={styles.slider}>
                {/* Slider */}
                <Slider
                  value={value2}
                  step={1}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={(value) => setValue2(value)}
                  minimumTrackTintColor={'#C5CFD1'}
                  maximumTrackTintColor={'#EBEBEB'}
                  thumbStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 20,
                  }}
                  customThumb={
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        overflow: 'hidden',
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: '#085D7A',

                      }}
                    />
                  }
                  trackStyle={{
                    height: 12, borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                />

              </View>
            </View>
            <View style={styles.pointContainer}>
              <View style={styles.inputPoint}>
                <Text>{value2}</Text>
                {/* <TextInput

                            value={value}
                            onChangeText={val => setValue(0)}
                        // need handle ASYNCSTORAGE
                        /> */}
              </View>
              <TouchableOpacity onPress={() => setValue2(0)}>
                <Text style={styles.h2}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Scoring Card 3 */}
        <View style={styles.componentContainer}>
          <View style={styles.number}>
            <Text style={styles.h1}>3. </Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.h1}>Dalam menjawab masalah yang ada, seberapa paham founder dalam hal ini?</Text>
            </View>
            <View style={styles.sliderContainer}>
              <View style={styles.titleSliderContainer}>
                <Text style={styles.h3}>Tidak Penting</Text>
                <Text style={styles.h3}>Penting</Text>
              </View>
              <View style={styles.slider}>
                {/* Slider */}
                <Slider
                  value={value3}
                  step={1}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={(value) => setValue3(value)}
                  minimumTrackTintColor={'#C5CFD1'}
                  maximumTrackTintColor={'#EBEBEB'}
                  thumbStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 20,
                  }}
                  customThumb={
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        overflow: 'hidden',
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: '#085D7A',

                      }}
                    />
                  }
                  trackStyle={{
                    height: 12, borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                />

              </View>
            </View>
            <View style={styles.pointContainer}>
              <View style={styles.inputPoint}>
                <Text>{value3}</Text>
                {/* <TextInput

                            value={value}
                            onChangeText={val => setValue(0)}
                        // need handle ASYNCSTORAGE
                        /> */}
              </View>
              <TouchableOpacity onPress={() => setValue3(0)}>
                <Text style={styles.h2}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Scoring Card 4 */}
        <View style={styles.componentContainer}>
          <View style={styles.number}>
            <Text style={styles.h1}>4. </Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.h1}>Jika Anda menjadi costumer, seberapa pentingkah masalah ini?</Text>
            </View>
            <View style={styles.sliderContainer}>
              <View style={styles.titleSliderContainer}>
                <Text style={styles.h3}>Tidak Penting</Text>
                <Text style={styles.h3}>Penting</Text>
              </View>
              <View style={styles.slider}>
                {/* Slider */}
                <Slider
                  value={value4}
                  step={1}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={(value) => setValue4(value)}
                  minimumTrackTintColor={'#C5CFD1'}
                  maximumTrackTintColor={'#EBEBEB'}
                  thumbStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 20,
                  }}
                  customThumb={
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        overflow: 'hidden',
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: '#085D7A',

                      }}
                    />
                  }
                  trackStyle={{
                    height: 12, borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                />

              </View>
            </View>
            <View style={styles.pointContainer}>
              <View style={styles.inputPoint}>
                <Text>{value4}</Text>
                {/* <TextInput

                            value={value}
                            onChangeText={val => setValue(0)}
                        // need handle ASYNCSTORAGE
                        /> */}
              </View>
              <TouchableOpacity onPress={() => { setValue4(0) }}>
                <Text style={styles.h2}>Clear</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ height: 10 }}></View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.totalScoreContainer}>
          <Text style={{
            fontSize: 13,
            fontWeight: '300',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            color: '#231F20',
            textAlign: 'justify',
            lineHeight: 20,
          }}>Total Score:</Text>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>{totalScore}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.buttonDraft}>
              <Text style={{ fontSize: 14, color: '#085D7A', fontWeight: '700' }}>Save as Draft</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonSubmit}>
              <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: '700' }}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

export default ScoringForm;


