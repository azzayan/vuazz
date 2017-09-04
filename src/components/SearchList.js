import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";
import SearchInput, {createFilter} from "react-native-search-filter";
import {CardItem, Container, Content, Icon, Item} from "native-base";

const KEYS_TO_FILTERS = ["fullName"];
const styles = {
    searchBoxStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 10
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
};
const {searchBoxStyle, headerTextStyle} = styles;

export default class SearchList extends Component {
    state = {parks: [], searchTerm: ""};

    componentWillMount() {
        const LIMIT = 600;
        const API_KEY = "C127CF67-F403-4823-AA42-B87B1E235D23";

        fetch(`https://developer.nps.gov/api/v0/parks?limit=${LIMIT}`, {
            method: "GET",
            headers: {
                "Authorization": API_KEY,
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                return this.setState({
                    parks: responseData.data
                });
            })
            .catch((error) => {
                console.log("There has been a problem with your fetch operation:", error.message);
            });
    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
    }

    render() {
        const filteredParks = this.state.parks.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        return (
            <Container>
                <Item>
                    <Icon name="ios-search"/>
                    <SearchInput style={searchBoxStyle} placeholder="Search..." onChangeText={(term) => {
                        this.searchUpdated(term)
                    }}/>
                </Item>
                <Content>
                    {filteredParks.map(filteredPark => {
                        return (
                            <TouchableOpacity key={filteredPark.id}>
                                <CardItem>
                                    <Text style={headerTextStyle}>{filteredPark.fullName}</Text>
                                </CardItem>
                            </TouchableOpacity>
                        )
                    })}
                </Content>
            </Container>
        )
    }
}