import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import Slider from 'react-native-custom-slider';
import { height } from 'styled-system';




const ScoringCard = () => {
    const [value, setValue] = useState(0);
    return (
        <View style={styles.container}>
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
                            value={value}
                            step={1}
                            minimumValue={0}
                            maximumValue={100}
                            onValueChange={(value) => setValue(value)}
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
                        <Text>{value}</Text>
                        {/* <TextInput

                            value={value}
                            onChangeText={val => setValue(0)}
                        // need handle ASYNCSTORAGE
                        /> */}
                    </View>
                    <TouchableOpacity onPress={() => setValue(0)}>
                        <Text style={styles.h2}>Clear</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ScoringCard;

const styles = StyleSheet.create({


})
