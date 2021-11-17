import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Unorderedlist from 'react-native-unordered-list';

const IdeasInfoContent = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Video Player */}
      <View style={styles.videoPlayer}>
        <Text style={{}}>Video Player</Text>
      </View>
      {/* Tittle Bar */}
      <View style={styles.contentContainer}>
        <View style={{ height: 25 }} />
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.h1}>
            Instalasi Pengolah Limbah untuk Biogas, Pupuk Cair dan Pakan Ternak
          </Text>
        </View>
        <Text style={styles.h4}>
          By <Text style={styles.h3}>MedIdea</Text>
        </Text>
        <View style={styles.tagContainer}>
          <Text style={styles.tagFont}>Theme 1</Text>
        </View>
        {/* Line */}
        <View style={{ height: 0.3, backgroundColor: 'black' }} />
        <View style={{ marginTop: 15, marginBottom: 5 }}>
          <Text style={styles.h2}>Description</Text>
        </View>
        {/* PROPS Database Description */}
        <View>
          <Text style={styles.h3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            pharetra tempor, accumsan, eu viverra suspendisse a amet. Diam
            phasellus curabitur lectus ullamcorper lorem et. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Turpis pharetra tempor,
            accumsan, eu viverra suspendisse a amet. Diam phasellus curabitur
            lectus ullamcorper lorem et. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Turpis pharetra tempor, accumsan, eu viverra
            suspendisse a amet curabitur lectus ulamorper.
          </Text>
        </View>
        <View style={{ marginTop: 15, marginBottom: 5 }}>
          <Text style={styles.h2}>Innovator</Text>
        </View>
        {/* PROPS Database Innovator */}
        <View style={{ paddingLeft: 10, marginBottom: 15 }}>
          <Unorderedlist>
            <Text style={styles.h3}>Budi Widiyanto</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={styles.h3}>Nakarina Aminah</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={styles.h3}>Jeje Seokarta </Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={styles.h3}>Bagee Widiyanto</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={styles.h3}>Nakiiri Sastro</Text>
          </Unorderedlist>
        </View>
        {/* Line */}
        <View style={{ height: 0.6, backgroundColor: 'black' }} />
        <View style={{ marginTop: 15, marginBottom: 5 }}>
          <Text style={styles.h2}>Why should we choose your team idea?</Text>
        </View>
        <View>
          <Text style={styles.h3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
            pharetra tempor, accumsan, eu viverra suspendisse a amet. Diam
            phasellus curabitur lectus ullamcorper lorem et. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Turpis pharetra tempor,
            accumsan, eu viverra suspendisse a amet. Diam phasellus curabitur
            lectus ullamcorper lorem et. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Turpis pharetra tempor, accumsan, eu viverra
            suspendisse a amet curabitur lectus ulamorper.
          </Text>
        </View>
      </View>
      <View style={{ height: 20 }} />
    </ScrollView>
  );
};

export default IdeasInfoContent;

const styles = StyleSheet.create({
  container: {},
  videoPlayer: {
    width: '100%',
    height: 180,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  h1: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#085D7A',
    lineHeight: 25,
  },
  h2: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#085D7A',
  },
  h3: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#231F20',
    textAlign: 'justify',
    lineHeight: 20,
  },
  h4: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    color: '#231F20',
  },
  tagFont: {
    fontSize: 12,
    color: '#085D7A',
    fontWeight: '700',
  },
  contentContainer: { paddingLeft: 2, paddingRight: 2 },
  tagContainer: {
    marginTop: 10,
    marginBottom: 15,
    width: 64,
    height: 25,
    backgroundColor: '#FEF5D5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
