package com.team5.remotivity.auth.models;

import javax.persistence.*;

@Entity
@Table(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "startDate")
    private String startDate;

    @Column(name = "endDate")
    private String endDate;

    @Column(name = "description")
    private String description;

    @Column(name = "CalendarType")
    private String CalendarType;

    public Item() {
    }

    public Item(String title, String startDate, String description, String endDate, String CalendarType) {
        this.title = title;
        this.startDate = startDate;
        this.description = description;
        this.endDate = endDate;
        this.CalendarType = CalendarType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String date) {
        this.startDate = startDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCalendarType() {
        return CalendarType;
    }

    public void setCalendarType(String calendarType) {
        CalendarType = calendarType;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "Item [id=" + id + ", title=" + title + ", startDate=" + startDate + ", description=" + description + ", endDate=" + endDate +
            ", calendarType=" + CalendarType + "]";
    }
}