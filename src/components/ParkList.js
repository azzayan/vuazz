import React, {Component} from "react";
import {TouchableOpacity} from "react-native";
import {Container, Content, Icon, Item, Spinner} from "native-base";
import SearchInput, {createFilter} from "react-native-search-filter";
import {Actions} from "react-native-router-flux";
import ParkListItem from "./ParkListItem";
import FooterBar from "./FooterBar";

const KEYS_TO_FILTERS = ["fullName"];   // used for searching
const styles = {
    searchBoxStyle: {
        margin: 12,
        flex: 1,
        justifyContent: "flex-start",
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
};
const {searchBoxStyle, spinnerStyle} = styles;

export default class ParkList extends Component {
    state = {parks: [], searchTerm: "", filteredParks: []};

    // fetches NPS data on startup
    componentWillMount() {
        const LIMIT = 600;  // total number of parks is over 500, so set limit to 600 to be safe
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

    // used for search bar
    searchUpdated(term) {
        this.setState({searchTerm: term})
    }

    // render list of parks (filtered, unfiltered, don"t matter)
    renderParks() {
        return this.state.filteredParks.map(park => {
            return (
                <TouchableOpacity key={park.id}
                                  park={park}
                                  onPress={() => Actions.parkOverview({park})}>
                    <ParkListItem key={park.id} park={park}/>
                </TouchableOpacity>
            )
        });
    }

    renderSearchBar() {
        return (
            <Item>
                <Icon style={{marginLeft: 15}} name="md-search"/>
                <SearchInput style={searchBoxStyle}
                             placeholder="Search for a park..."
                             onChangeText={(term) => {
                                 this.searchUpdated(term)
                             }}
                />
            </Item>
        )
    }

    renderFooter() {
        return (
            <FooterBar/>
        )
    }

    render() {
        // update filtered parks array from search bar
        this.state.filteredParks = this.state.parks.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        if (this.state.parks.length === 0) {
            return (
                <Container>
                    {/*search bar*/}
                    {this.renderSearchBar()}

                    {/*list of parks*/}
                    <Content>
                        <Spinner style={spinnerStyle} color="#6AC700"/>
                    </Content>

                    {/*footer*/}
                    {this.renderFooter()}
                </Container>
            )
        }

        return (
            <Container>
                {/*search bar*/}
                {this.renderSearchBar()}

                {/*list of parks*/}
                <Content>
                    {this.renderParks()}
                </Content>

                {/*footer*/}
                {this.renderFooter()}
            </Container>
        );
    }
}
