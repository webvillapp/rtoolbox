import React from 'react';
import ContentToolbox from './ContentToolbox';
import Sidebar from '../Sidebar';
import DynamicFilter from '../Sidebar/DynamicFilter';


/* ### Main ### */

export default class MainToolbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        filteredList: this.props.allCategories,
        filterType: 'c',
        isFilterSettingsVisible: false
        };
        this.filterList = this.filterList.bind(this);
        this.toggleFilterSettingsVisibility = this.toggleFilterSettingsVisibility.bind(this);
        this.toggleFilterType = this.toggleFilterType.bind(this);
    }

    toggleFilterSettingsVisibility() {
        this.setState({
        isFilterSettingsVisible: !this.state.isFilterSettingsVisible
        })
    }

    toggleFilterType(radioValue) {
        this.setState({
        filterType: radioValue === 'c' ? 'c' : 'l'
        })
    }

    filterList(textInputValue) {
        const searchTerm = textInputValue;

        const newFilteredList = (this.state.filterType === 'c') 
        ? this.getFilteredCategoriesForSearchTerm(searchTerm) 
        : this.getFilteredLinksForSearchTerm(searchTerm);

        this.setState({
        filteredList: newFilteredList
        })
    }

    getFilteredCategoriesForSearchTerm(searchTerm) {
        return this.props.allCategories.filter(currCategory => currCategory.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    getFilteredLinksForSearchTerm(searchTerm) {
        function linksMatch(categoryElement) {
            let links = categoryElement.links;
            let linksFiltered = links.filter(checkedElement => (
                checkedElement.name.toLowerCase().includes(searchTerm.toLowerCase())
            ));
            categoryElement.links = linksFiltered;
            return categoryElement;
        }
        let arrCopy = JSON.parse(JSON.stringify(this.props.allCategories));
        let filteredList = arrCopy.map(linksMatch);
        return filteredList.map(linksMatch);
    }

    render() {
        return (
        <div className="main-container container">    
            <div className="content-wrapper">
                <Sidebar pageTitle={this.props.title}>
                    <DynamicFilter
                        onTextInputChange={this.filterList} 
                        onSwitcherClick={this.toggleFilterSettingsVisibility} 
                        isSettingsShowing={this.state.isFilterSettingsVisible} 
                        onRadioChange={this.toggleFilterType}
                    />
                </Sidebar>
                <ContentToolbox filteredList={this.state.filteredList} />
            </div>
        </div>
        )
    }
}