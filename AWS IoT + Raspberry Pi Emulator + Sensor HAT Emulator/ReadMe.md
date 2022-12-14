# AWS IoT + Raspberry Pi Emulator + Sensor HAT Emulator
## Description
<img width="357" alt="Capture" src="https://user-images.githubusercontent.com/52802567/203397990-78fe6f46-e5d4-4936-9222-1f3890a2abdf.PNG">
  Sensor (emulator) collect temperature data

  Sensor (emulator) publish temperature data to the AWS IOT platform

  Sensor subscriber receive temperature data

## PartI: Install Raspberry Pi emulator + VirtualBox + Sense HAT Emulator

It mainly contains two steps:

  Install Virtual Box and Install Raspberry Pi OS on VirtualBox
  Run Sensor HAT Emulator
  
Please refer to Part I in [Raspberry Pi emulator + VirtualBox + Sense HAT Emulator+Application.pdf](https://github.com/groovyxw/IoT/blob/main/AWS%20IoT%20%2B%20Raspberry%20Pi%20Emulator%20%2B%20Sensor%20HAT%20Emulator/Raspberry%20Pi%20emulator%20%2B%20VirtualBox%20%2B%20Sense%20HAT%20Emulator%2BApplication.pdf)

## PartII: Connecting IoT Devices (Sense HAT Emulator) To AWS IoT Platform

#### Walk through "AWS IOT Connect one device"
  Create a thing, certificate, policy and attach them with each other together
#### Implementation
  Please refer to [pubsub.py]() for details

#### How to Run?
  Please refer to part II in [Raspberry Pi emulator + VirtualBox + Sense HAT Emulator+Application.pdf](https://github.com/groovyxw/IoT/blob/main/AWS%20IoT%20%2B%20Raspberry%20Pi%20Emulator%20%2B%20Sensor%20HAT%20Emulator/Raspberry%20Pi%20emulator%20%2B%20VirtualBox%20%2B%20Sense%20HAT%20Emulator%2BApplication.pdf)

## Presentation
[Presentation](https://docs.google.com/presentation/d/1etXIgL8NAgoOj8rBQb7LE9VJPFoSY0qvR7h0KiXh3co/edit?usp=sharing)

