import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SearchableFlatList} from 'react-native-searchable-list';
import Details from './Details';
import CustomModal from '../../CustomComponent/CustomModal/CustomModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Styles} from './Styles';
import colors from '../../commonStyleSheet/Color';

const UserDetails = () => {
  const [data, setData] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [item, setItem] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchAttribute, setSearchAttribute] = useState('title');
  const [checktitle, setCheckTitle] = useState(true);
  const [checkAuthor, setCheckAuthor] = useState(false);

  useEffect(() => {
    if (offset == 0) {
      getData();
    }

    let id = setInterval(() => {
      setOffSet(offset + 1);
      getData();
    }, 10000);

    return () => clearInterval(id);
  }, [offset]);

  const getData = async () => {
    setLoading(true);
    await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=` + offset,
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          let hits = responseJson.hits;
          let lists = [...data, ...hits];
          const count = offset + 1;
          setOffSet(count);
          setData(lists);
          setLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const keyExtractor = (item, index) => {
    item.created_at;
  };

  const handleItem = item => {
    setItem(item);
    setIsModal(true);
  };

  const closeDialog = () => {
    setIsModal(false);
    setItem('');
  };

  return (
    <View style={[Styles.mv_2]}>
      <View style={[Styles.mh_2]}>
        <Text style={[Styles.text, Styles.txt_grey]}>Filter Section</Text>
        <View style={[Styles.directionRow, Styles.justify_space_between]}>
          <View style={[Styles.directionRow]}>
            <TouchableOpacity
              style={[Styles.directionRow, Styles.align_center]}
              onPress={() => {
                setCheckTitle(true);
                setCheckAuthor(false);
                setSearchAttribute('title');
              }}>
              <Text>
                <Icon
                  name={`${
                    checktitle ? 'check-box' : 'check-box-outline-blank'
                  }`}
                  size={24}
                  color={colors.themeColor}
                />
              </Text>
              <Text style={[Styles.pl_2, Styles.text]}>Title</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[Styles.directionRow, Styles.align_center]}
              onPress={() => {
                setCheckTitle(false);
                setCheckAuthor(true);
                setSearchAttribute('author');
              }}>
              <Text>
                <Icon
                  name={`${
                    checkAuthor ? 'check-box' : 'check-box-outline-blank'
                  }`}
                  size={24}
                  color={colors.themeColor}
                />
              </Text>
              <Text style={[Styles.pl_2, Styles.text]}>Author</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TextInput
        style={[Styles.input_container]}
        placeholder="Search"
        onChangeText={text => setSearchTerm(text)}
      />
      <SearchableFlatList
        showsVerticalScrollIndicator={false}
        data={data}
        searchTerm={searchTerm}
        searchAttribute={searchAttribute}
        ignoreCase={true}
        renderItem={({item, index}) => (
          <Details
            item={item}
            index={index}
            getItem={item => handleItem(item)}
          />
        )}
        keyExtractor={keyExtractor}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
        initialNumToRender={15}
      />
      {isModal ? (
        <CustomModal isModal={true} data={item} closeDialog={closeDialog} />
      ) : null}
      {true ? (
        <View style={[Styles.mv_2]}>
          <ActivityIndicator animating size="large" color="#72d389" />
        </View>
      ) : null}
    </View>
  );
};

export default UserDetails;
