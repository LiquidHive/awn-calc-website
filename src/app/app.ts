import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isDark = localStorage.getItem('theme') === 'dark';

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  features: Feature[] = [
    {
      icon: 'checklist',
      title: '15 Pre-loaded Items',
      desc: 'Slats, flashings, tubes, and hardware with baseline prices and formulas built in.',
    },
    {
      icon: 'functions',
      title: 'Smart Formulas',
      desc: 'Each component type has its own pricing logic — scaling by length, quantity, or markup factors.',
    },
    {
      icon: 'edit_note',
      title: 'Custom Items',
      desc: 'Add arbitrary items with custom names, unit prices, and quantities for anything not in the catalog.',
    },
    {
      icon: 'percent',
      title: 'Tax & Interest',
      desc: 'Configurable tax rates with custom labels, plus an adjustable interest (markup) line item.',
    },
    {
      icon: 'settings',
      title: 'Fully Configurable',
      desc: 'Currency, locale, unit system (imperial/metric), tax label, theme — all adjustable in settings.',
    },
    {
      icon: 'security',
      title: 'Local & Private',
      desc: 'All data stays on your device using Hive local storage. No accounts, no sign-up, no servers.',
    },
  ];
}
