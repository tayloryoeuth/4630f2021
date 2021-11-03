package com.example.assignment3;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    private Button Btn2;
    private Button Btn3;
    private Button Btn4;
    private Button Btn5;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Btn2 = findViewById(R.id.button1);
        Btn2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                moveToActivityTwo();
            }
        });


        Btn3 = findViewById(R.id.button2);
        Btn3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                moveToActivityThree();
            }
        });

        Btn4 = findViewById(R.id.button3);
        Btn4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                moveToActivityFour();
            }
        });

        Btn5 = findViewById(R.id.button4);
        Btn5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                moveToActivityFive();
            }
        });
    }

    private void moveToActivityTwo()
        {
            Intent intent = new Intent(MainActivity.this, whereami.class);
            startActivity(intent);
        }

    private void moveToActivityThree()
    {
        Intent intent = new Intent(MainActivity.this, Facts.class);
        startActivity(intent);
    }

    private void moveToActivityFour()
    {
        Intent intent = new Intent(MainActivity.this, InvestmentPortfolio.class);
        startActivity(intent);
    }

    private void moveToActivityFive()
    {
        Intent intent = new Intent(MainActivity.this, Resume.class);
        startActivity(intent);
    }

}