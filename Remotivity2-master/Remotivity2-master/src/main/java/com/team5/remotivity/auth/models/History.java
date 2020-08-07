package com.team5.remotivity.auth.models;

import javax.persistence.*;

@Entity
@Table(name = "history")
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "date")
    private String date;

    @Column(name = "dayrating")
    private int dayRating;

    public History() {
    }

    public History(String date, int dayRating) {
        this.date = date;
        this.dayRating = dayRating;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getDayRating() {
        return dayRating;
    }

    public void setDayRating(int dayRating) {
        this.dayRating = dayRating;
    }

    @Override
    public String toString() {
        return "Item [id=" + id + ", date=" + date + ", dayRating=" + dayRating + "]";
    }
}